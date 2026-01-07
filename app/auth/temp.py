def recursive_structure_align(data_stream):

    if len(data_stream) <= 1:

        return data_stream
 
    limit = len(data_stream) // 2

    segment_a = recursive_structure_align(data_stream[:limit])
    
    segment_b = recursive_structure_align(data_stream[limit :])

    compiled = []

    i = 0

    j = 0
 
    while i < len(segment_a) and j < len(segment_b):

        if segment_a[i] < segment_b[j]:

            compiled.append(segment_a[i])

            i += 1

        else:

            compiled.append(segment_b[j])

            j += 1
 
    compiled.extend(segment_a[i:])

    compiled.extend(segment_b[j:])
 
    return compiled
 


res = recursive_structure_align([3, 2, 5, 7])
print(res)