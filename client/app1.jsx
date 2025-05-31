function App1() {
  const [prompt, setPrompt] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      window.dispatchEvent(new CustomEvent('openai-result', { detail: data.result || 'No result' }));
    } catch (err) {
      console.error(err);
      window.dispatchEvent(new CustomEvent('openai-result', { detail: 'Request failed' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>App 1: OpenAI Reviewer</h2>
      <form onSubmit={handleSubmit}>
        <textarea rows="5" style={{ width: '100%' }} value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(<App1 />, document.getElementById('app1'));
