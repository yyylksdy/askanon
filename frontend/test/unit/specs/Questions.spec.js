import { mount } from 'vue-test-utils'
import Questions from '../../../src/components/Questions'

const createCmp = propsData => mount(Questions, { propsData })

describe('Questions.spec.js', () => {
  let cmp

  describe('Properties', () => {
    it('has a question property', () => {
      cmp = createCmp({ question: 'hey' })
      expect(cmp.hasProp('question', 'hey')).toBeTruthy()
    })

    describe('Validation', () => {
      const question = createCmp().vm.$options.props.question

      it('question is of type string', () => {
        console.log(question)
        expect(question.type).toBe(String)
      })

      it('qustion is required', () => {
        expect(question.required).toBeTruthy()
      })
    })
  })
})
