"""
Write the classes serving the representation of the problem. These classes are:
    - Node;
    - Segment;
    - Network
"""
# A node is characterized by its name
class Node:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return self.name

# A segment is recognizable by two nodes
class Segment:
    def __init__(self, first_end, second_end):
        self.first_end = Node(first_end)
        self.second_end = Node(second_end)

    def __str__(self):
        return '[ ' + self.first_end.__str__() + ' , ' + self.second_end.__str__() + ' ]' 

class Network:
    nodes = []

    def __init__(self, segments):
        self.segments = segments

    def __str__(self):
        network = ''
        for segment in self.segments:
            network += segment.__str__() + ' '
        return network
    
    # Extract nodes from segments
    def extract_nodes(self):
        names = []
        for segment in self.segments:
            if segment.first_end.name not in names:
                names.append(segment.first_end.name)
            if segment.second_end.name not in names:
                names.append(segment.second_end.name)
        return names

segments = [Segment('A','B'), Segment('A', 'C'), Segment('C', 'D')]
network = Network(segments)
names = network.extract_nodes()
for name in names:
    print(name)