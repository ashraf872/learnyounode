variable=0;

for (let i=2;i<process.argv.length;i++)
{
    variable += +process.argv[i]
}
console.log(variable);