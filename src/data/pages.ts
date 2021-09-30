const pages: Page[] = [
  {
    name: 'Test Page',
    description: 'Welcome to my awesome test page. Groner!',
    id: 'example',
    color: '#10d010',
  },
  {
    name: 'Second Page',
    description: 'Just a layout test. Don\'t mind me.',
    id: 'example1',
    color: '#d01010',
  },
  {
    name: 'Awesome Third Page',
    description: 'Groner roner... Groner roner',
    id: 'example2',
    color: '#1010d0',
  },
  {
    name: 'Sick Thing',
    description: 'You will be Mind Blown from this one.. honestly!!!',
    id: 'example3',
    color: '#108080',
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
