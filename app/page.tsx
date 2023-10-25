import './globals.css'
import Header from "@/app/src/components/header/header";
import Footer from "@/app/src/components/footer/footer";
import MyHome from "@/app/src/pages/home/home";

export default function Home() {
  return (
      <div>
        <Header></Header>
          <div className={"mySides"}>
              <MyHome/>

          </div>
        <footer><Footer/></footer>
      </div>


  )
}
