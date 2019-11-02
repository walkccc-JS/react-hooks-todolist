import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  header: {
    textAlign: 'center',
    '& h1': {
      color: '#2c3e50',
      margin: '5vh 0 0 0',
      fontSize: '5rem',
      fontWeight: '300',
      '& span': {
        fontWeight: '700'
      }
    },
    '& h2': {
      color: '#9aa1a5',
      fontSize: '0.75rem',
      fontWeight: '300'
    }
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    color: '#81b3d2',
    fontSize: '0.7rem',
    position: 'relative',
    textDecoration: 'none',
    transition: '0.5s color ease'
  }
});
