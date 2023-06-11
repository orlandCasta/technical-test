import { format } from 'date-fns'
import es from 'date-fns/locale/es'

export const getCurrentDate = () => {
  return format(new Date(), 'dd MMMM yyyy', { locale: es })
}
