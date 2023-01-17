module.exports = {
  head: '',               // HTML string added into start of `<head>`
  header: '',             // HTML string added to start of `<body>`
  footer: '',             // HTML string added to end of `<body>`
  links: [                
    { title: 'Overview', href: '/horror-rpg-framework/', dir: 'docs' }, // Array of navigation links
    { title: 'Foo', href: '/horror-rpg-framework/foo/', dir: 'docs/foo' },
    { title: 'Bar', href: '/horror-rpg-framework/bar/', dir: 'docs/bar' },
    { title: 'Menu Item', href: '/horror-rpg-framework/menu-item/', dir: 'docs/menu-item' }
  ],
  _template: 'default',   // Use the `default` template
  _title: ''              // Dummy placeholder (required)
}
