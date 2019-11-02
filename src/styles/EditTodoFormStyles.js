import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  EditTodoForm: {
    width: '100%',
    marginBottom: '1rem'
  },
  input: {
    width: '85%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontSize: '1rem',
    transition: '0.6s',
    transform: 'translateY(8px)',
    '&:focus': {
      borderBottom: '1px solid #58b2dc',
      outline: 'none'
    }
  }
});
