import React from 'react'

const PostAddForm = () => {
	return(
		<form className='bottom-panel d-flex'>
			<input
			type='text'
			placeholder='О чем думаете?'
			className='form-control new-post-lable'
			/>
			<button
			type='submit'
			className='btn btn-outline-secondary'
			>	Добавить</button>
		</form>
	)
}
export default PostAddForm