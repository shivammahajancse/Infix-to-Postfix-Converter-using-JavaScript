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

function operator(op)
{
    if(op=='+' || op=='-' || op=='^' || op=='*' || op=='/' || op=='(' || op==')')
    {
        return true;
    }
    else
    return false;
}

function precedency(pre)
{
    if(pre=='@' || pre=='(' || pre==')')
    {
        return 1;
    }
    else if(pre=='+' || pre=='-')
    {
        return 2;
    }
    else if (pre=='/' || pre=='*')
    {
        return 3;
    }
    else if(pre=='^')
    {
        return 4;
    }
    else
    return 0;
}