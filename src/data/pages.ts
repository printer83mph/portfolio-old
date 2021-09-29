const pages: Page[] = [
  {
    name: 'Test Page',
    description: 'Welcome to my awesome test page. I love big boner!',
    id: 'example',
  },
]

export const getPage = (id: string) => {
  for (let i = 0; i < pages.length; i += 1) {
    const page = pages[i]
    if (page.id === id) return page
  }
  return null
}

export const getPageImageURL = (id: string) => `pages/img/${id}.png`

export default pages
