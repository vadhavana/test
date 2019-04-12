def fact(n):
    fact = 1
    if n<0:
        print("enter positive number")
    elif n ==1:
        print("fact of 1 is 1")
    else:
        for i in range(1,n):
            fact = fact*i
#            print(fact)
    print(fact)
fact(10)


