export default function Components() {
    return (
      <div>
        <Component name="Alice" job="Frontend Developer" />
      </div>
    );
  }
  
  function Component({ name, job }) {
    return (
      <div >
          <h1>{name}</h1>
          <h1>{job}</h1>
      </div>
      );
  }
  