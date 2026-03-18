#find the runner-up score
n = int(input())
arr = list(map(int, input().split()))

arr = list(set(arr))  
arr.sort()

print(arr[-2])