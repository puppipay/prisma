import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

 const user = await prisma.user.create ({data: {name: "sally"}});

 console.log(user);

 /*
{ id: 2, name: 'kyle' }
 */

}

main()
   .catch(e =>  {

    }).finally(async () =>  {
      await prisma.$disconnect();
    })

