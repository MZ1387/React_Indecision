const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: [1, 2],
};

function onFormSubmit() {
  console.log(arguments);
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
);

console.log(template);

ReactDOM.render(template, document.getElementById('app'));
