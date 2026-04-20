import { business } from '../data/BusinessData'

export default function TapToCall() {
  return (
    <a href={business.tel} className="tap-call">
      📞 Tap to Call — {business.phone}
    </a>
  )
}
