import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

 const users = await prisma.user.findUnique({name : "kyle"});

 console.log(users);

 /*
[
  { id: 1, name: 'kyle' },
  { id: 2, name: 'kyle' },
  { id: 3, name: 'sally' }
]
 */

}

main()
   .catch(e =>  {

    }).finally(async () =>  {
      await prisma.$disconnect();
    })

