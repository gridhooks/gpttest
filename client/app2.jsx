function App2() {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    function handler(e) {
      setContent(e.detail);
    }
    window.addEventListener('openai-result', handler);
    return () => window.removeEventListener('openai-result', handler);
  }, []);

  return (
    <div>
      <h2>App 2: Result Viewer</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
    </div>
  );
}

ReactDOM.render(<App2 />, document.getElementById('app2'));
