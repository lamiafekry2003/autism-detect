import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function Loading() {
    return (

      <div className="flex justify-center items-center h-[200px] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
<Stack spacing={1} className="w-full max-w-xs">
  {/* Circular skeleton */}
  <div className="flex gap-3 items-center">
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="70%" height={20} />
  </div>
  {/* Rectangular and rounded skeletons */}
  <Skeleton variant="rectangular" width="70%" height={10} />
  <Skeleton variant="rounded" width="70%" height={10} />
</Stack>
</div>

    )
  }
