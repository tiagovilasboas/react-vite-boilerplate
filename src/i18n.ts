import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

type LocaleModule = { default: Record<string, unknown> }

const localeModules: Record<string, LocaleModule> = import.meta.glob(
  './locales/*/*.json',
  { eager: true },
)

function buildResources(): Record<
  string,
  Record<string, Record<string, unknown>>
> {
  const resources: Record<string, Record<string, Record<string, unknown>>> = {}

  for (const [filePath, mod] of Object.entries(localeModules)) {
    const match = /\/locales\/([^/]+)\/([^/]+)\.json$/.exec(filePath)
    if (!match) continue
    const [, lng, ns] = match
    resources[lng] ??= {}
    resources[lng][ns] = mod.default
  }

  return resources
}

const resources = buildResources()
const namespaces = [
  ...new Set(Object.values(resources).flatMap((packs) => Object.keys(packs))),
]

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  lng: 'pt',
  debug: false,
  resources,
  ns: namespaces.length > 0 ? namespaces : ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // React already escapes
  },
})

export default i18n
