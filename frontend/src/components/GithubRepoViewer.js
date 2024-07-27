import React, { useState, useEffect } from 'react';
import '../styles/githubRepoViewer.css'; // Ensure this file has appropriate styles
import axios from 'axios';
import { Treebeard } from 'react-treebeard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

// GitHubRepoViewer component
const GitHubRepoViewer = ({ owner, repo }) => {
  const [data, setData] = useState({ name: repo, toggled: true, children: [] });
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState('');
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/contents/`
        );
        setData({
          name: repo,
          toggled: true,
          children: result.data.map(item => ({
            name: item.name,
            path: item.path,
            type: item.type,
            toggled: false,
            children: item.type === 'dir' ? [] : null,
          })),
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [owner, repo]);

  const onToggle = async (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    node.toggled = toggled;

    if (node.type === 'dir') {
      if (toggled && !node.children.length) {
        try {
          const result = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/contents/${node.path}`
          );
          const children = result.data.map(item => ({
            name: item.name,
            path: item.path,
            type: item.type,
            toggled: false,
            children: item.type === 'dir' ? [] : null,
          }));
          node.children = children;
        } catch (error) {
          console.error('Error fetching directory contents:', error);
        }
      }
    } else if (node.type === 'file') {
      try {
        const result = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/contents/${node.path}`
        );
        const decodedContent = atob(result.data.content);
        setContent(decodedContent);
        const ext = node.name.split('.').pop();
        setLanguage(getLanguageFromExtension(ext));
      } catch (error) {
        console.error('Error fetching file content:', error);
      }
    }
    setCursor(node);
    setData(prevData => ({
      ...prevData,
      children: updateTree(prevData.children, node),
    }));
  };

  const updateTree = (tree, node) => {
    if (tree.name === node.name) {
      return node;
    }
    if (tree.children) {
      return {
        ...tree,
        children: tree.children.map(child => updateTree(child, node)),
      };
    }
    return tree;
  };

  const getLanguageFromExtension = (ext) => {
    switch (ext) {
      case 'js':
        return 'javascript';
      case 'py':
        return 'python';
      case 'java':
        return 'java';
      case 'rb':
        return 'ruby';
      case 'cpp':
        return 'cpp';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      default:
        return 'plaintext';
    }
  };

  return (
    <div className="repoDisplay">
      <div className = "repoStructure">
        <Treebeard
          data={data}
          onToggle={onToggle}
        />
      </div>
      {content && (
        <div className="codeDisplay">
        <SyntaxHighlighter language={language} style={okaidia}>
          {content}
        </SyntaxHighlighter>
      </div>
      )}
    </div>
  );
};

export default GitHubRepoViewer;

  