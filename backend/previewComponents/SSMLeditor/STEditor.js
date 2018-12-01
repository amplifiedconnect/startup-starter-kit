import React, { Component, Fragment } from 'react'
import { BlockEditor } from 'part:@sanity/form-builder'
import Button from 'part:@sanity/components/buttons/default'
import Select from 'part:@sanity/components/selects/default'
import { serializers } from './serializers'
import { speakSSML } from './speakSSML'
import styles from './STEditor.css'

export default class SSMLBlockEditor extends Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      loading: 0,
      // @TODO: Make selectable?
      ssmlGender: 'MALE'
    }
  }

  play = ({ value }) => speakSSML(value, { ssmlGender: this.state.ssmlGender }, serializers)

  render() {
    const { loading, playing } = this.state
    return (
      <Fragment>
        <BlockEditor
          {...this.props}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={() => this.play(this.props)}>Speak text</Button>
        </div>
      </Fragment>
    )
  }
}
