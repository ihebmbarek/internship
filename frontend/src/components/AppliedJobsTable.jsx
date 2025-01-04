import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"


const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className='text-right'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1,2,3,4].map((item, index) =>(
              <TableRow key={index}>
                <TableCell>17-07-2024</TableCell>
                <TableCell>Fronetend Developer</TableCell>
                <TableCell>Papaya Coders</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
