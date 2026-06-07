def solution(array, commands):
    answer = []
    # sorted.array
    # sorted.commands
    # print(array)
    for command in commands:
        i, j, k = command
        # print(k)
        slarray = array[i - 1:j]
        sldarray = sorted(slarray)
        print(sldarray)
        # print(slarray)
        answer.append(sldarray[k - 1])
    return answer