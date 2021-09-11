import { Box } from '@material-ui/core';
import MathContainer from 'components/mathContainer.component';

const APage = () => {
  return (
    <Box>
      <MathContainer numberRange={10000} />
    </Box>
  )
}

export default APage;