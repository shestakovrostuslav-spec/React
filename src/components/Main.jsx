function Main(props) {
  const { name, age, group } = props;

  return (
    <main style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <p>Привіт, я {name || 'студент'}, це моя перша ЛР з React!.</p>
      
      {age && <p><strong>Вік:</strong> {age}</p>}
      {group && <p><strong>Група:</strong> {group}</p>}
    </main>
  );
}

export default Main;