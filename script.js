var stackarr=[];
const top=-1;

function push(e)
{
   top++;
   stackarr[top]=e;
}

function pop()
{
    if(top==-1)
    return 0;
    else
    {
        var popped_ele=stackarr[top];
        top--;
        return popped_ele;
    }
}
