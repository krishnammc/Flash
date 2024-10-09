import Dashboard from "@/lib/pages/dashboard";




// Amplify.configure(outputs);


  function page () {

  // const router = useRouter()
  // const [state,setState]= useState(0);
  // const cloudTrail = rememberDevice()
  // .then((result) => {
  //   console.log(result)
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  // const { session, loading, error } = useCurrentUser();
  // console.log(cloudTrail);



  // async function handleSignOut() {
  //   await signOut({ global: true })
  //   router.push("/client/login")
  // }

  return (
    <>
    <Dashboard />
    </>
  )
}

export default (page)