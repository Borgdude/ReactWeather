var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link className="/?location=Bryan">Bryan, TX</Link>
        </li>
        <li>
          <Link className="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
