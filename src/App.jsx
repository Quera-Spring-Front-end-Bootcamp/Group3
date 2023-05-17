const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
