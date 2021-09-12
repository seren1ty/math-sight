import { Box } from '@material-ui/core';
import MathContainer from 'components/mathContainer.component';

const SPage = () => {
  return (
    <Box>
      <MathContainer userId="s" numberRangeAM={20} numberRangeMD={6} />
    </Box>
  );
}

export default SPage;