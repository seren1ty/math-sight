import { Box } from '@material-ui/core';
import MathContainer from 'components/mathContainer.component';

const APage = () => {
  return (
    <Box>
      <MathContainer userId="a" numberRangeAM={10000} numberRangeM={12} numberRangeD={100} />
    </Box>
  )
}

export default APage;