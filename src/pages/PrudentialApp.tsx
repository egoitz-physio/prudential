import ClientPresentationApp from '../components/ClientPresentationApp'
import type { TabId } from '../components/ClientPresentationApp'

const CLIENT_NAME = 'Prudential'
const CLIENT_LOGO = '/images/logo-prudential.svg'

export default function PrudentialApp() {
  const visibleTabs: TabId[] = ['objetivo', 'results', 'product', 'value', 'implement']

  return (
    <ClientPresentationApp
      clientName={CLIENT_NAME}
      clientLogo={CLIENT_LOGO}
      homePath="/"
      visibleTabs={visibleTabs}
      initialTab="objetivo"
    />
  )
}
