type CommentProps = {
  comment?: string;
}

export function Comment(props: CommentProps) {
  return (
    <p>{ props.comment }</p>
  )
}