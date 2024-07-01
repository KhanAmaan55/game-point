import { Head } from '@inertiajs/react'
// import { Button } from '@mui/material'
import './index.scss'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link } from '@inertiajs/react'

const Index = (props: any) => {
  console.log(props.tournaments)
  return (
    <>
      <Head title="Tournaments" />
      <div className="tournament-content">
        {/* <Button variant="outlined" className="createButton">
          <span>Create A New Tournament</span>
        </Button> */}
        {
            props.tournaments.map((tournament:any)=>(
                <Link href={`/tournaments/${tournament.id}`} className='text-decoration-none' key={tournament.id}>
                <Card className="cardButton">
                  <CardContent>
                    <span>{tournament.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))
        }
        <Link href="/tournaments/create" className='text-decoration-none'>
          <Card className="cardButton">
            <CardContent>
              <span>Create A New Tournament</span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  )
}
export default Index;