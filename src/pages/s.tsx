import { Box } from '@material-ui/core';
import MathContainer from 'components/mathContainer.component';

const SPage = () => {
  return (
    <Box>
      <MathContainer numberRange={20} />
    </Box>
  );
}

export default SPage;