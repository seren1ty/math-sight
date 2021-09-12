import { Box } from '@material-ui/core';
import MathContainer from 'components/mathContainer.component';

const APage = () => {
  return (
    <Box>
      <MathContainer numberRangeAM={10000} numberRangeMD={12} />
    </Box>
  )
}

export default APage;