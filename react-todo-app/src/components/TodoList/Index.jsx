import PropTypes from 'prop-types';

const TodoList = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

TodoList.propTypes = {
  children: PropTypes.node
};

export default TodoList;
