import 'jest-styled-components'
import { getDayOfWeek } from '../utils/utils'
import moment from 'moment'

it('Get day of week util method has no regressions', () => {
  expect(getDayOfWeek(moment([2019, 10, 1]))).toEqual('Fri')
})
