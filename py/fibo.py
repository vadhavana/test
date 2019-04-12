def fibo(n):
    t1=0
    t2=1
    nterm = 0
    for i in range(1,n+1):
        if i == 1:
            print(t1)
            continue
        if i==2:
            print(t2)
            continue
        nterm = t1+t2
        t1=t2
        t2 =nterm
        print(nterm)

fibo(10)
        

