import { useState } from "react"
import { PlusIcon } from "../assets/icons/plus"
import { ShareIcon } from "../assets/icons/share"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { CreateContentModel } from "../components/ui/createContentModel"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent"


function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const contents = useContent();


  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-68 min-h-screen bg-slate-200">
        <CreateContentModel isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }} />
        <div className="flex justify-end gap-4">
          <Button onClick={() => {
            setIsOpen(true);
          }} variant="primary" text="Add content" startIcon={<PlusIcon
            size="lg"
          />}></Button>
          <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon
            size="lg"
          />}></Button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 pt-6">
          {contents.map(({type, link, title}) => (
            <div key={link} className="break-inside-avoid mb-4">
              <Card
                type={type}
                link={link}
                title={title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard