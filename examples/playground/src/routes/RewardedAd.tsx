import { Button } from '@chakra-ui/react'
import * as React from 'react'

export interface RewardedAdProps {}

const RewardedAd: React.FC<RewardedAdProps> = () => {
  const rewarded = React.useMemo(
    () =>
      new admob.RewardedAd({
        adUnitId: 'ca-app-pub-3940256099942544/5224354917',
      }),
    [],
  )

  return (
    <div>
      <Button
        onClick={() => {
          rewarded.load()
        }}
      >
        load
      </Button>
      <Button
        onClick={() => {
          rewarded.show()
        }}
      >
        show
      </Button>
    </div>
  )
}

export default RewardedAd
