import { mount } from 'vue-test-utils'
import Questions from '../../../src/components/Questions'

const createCmp = propsData => mount(Questions, { propsData })

describe('Questions.spec.js', () => {
  let cmp

  describe('Properties', () => {
    it('has a question property', () => {
      cmp = createCmp({ question: 'hey' })
      expect(cmp.props('question', 'hey')).toBeTruthy()
    })

    describe('Validation', () => {
      const question = createCmp().vm.$options.props.question

      it('question is of type Object', () => {
        console.log(question)
        expect(question.type).toBe(Object)
      })

      it('qustion is required', () => {
        expect(question.required).toBeTruthy()
      })
    })
  })
})
