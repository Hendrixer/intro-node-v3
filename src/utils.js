export const listNotes = (notes) => {
  notes.forEach(note => {
    console.log('\n')
    console.log('id: ', note.id)
    console.log('tags: ', note.tags.join(', ')),
    console.log('note: ', note.content)
  })
}