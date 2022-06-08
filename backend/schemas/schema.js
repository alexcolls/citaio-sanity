// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import header from './header'
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'


const langSchema = {
  name: 'langSchema',
  title: 'LangSchema',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string'
    },
    {
      title: 'Español',
      name: 'es',
      type: 'string'
    },
    {
      title: 'Català',
      name: 'cat',
      type: 'string'
    }
  ]
}



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([langSchema, header, abouts, works, testimonials, brands, skills, workExperience, experiences, contact
    /* Your types here! */
  ]),
})
