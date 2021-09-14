const arr = [1, 2, 3, 4];

const Content = () => {
  return (
    <div className="content">
      {arr.map((a, index) => {
        return <div key={index} className="card"></div>;
      })}
    </div>
  );
};

export default Content;
