function index(props) {
  return <div>{props.id}</div>;
}

export default index;

export async function getServerSideProps(context) {
  const id = context.params.moviesId;
  console.log(id);
  return {
    props: {
      id,
    },
  };
}
