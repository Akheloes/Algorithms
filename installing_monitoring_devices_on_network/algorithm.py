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
        self.index = self.first_end + self.second_end

    def __str__(self):
        return '[ ' + self.first_end.__str__() + ' , ' + self.second_end.__str__() + ' ]' 

    def nodeInSegment(self, node_name):
        if self.first_end.name == node_name or self.first_end.name == node_name:
            return True


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
        for name in names:
            self.nodes.append(Node(name))
        return names

    # Pick somes nodes such as all segments are covered
    # There need not be optimization at this stage, a.k.a: we are not trying to minimize the set of needed nodes.
    def monitoring_nodes(self):
        self.extract_nodes()
        # TODO: return all nodes which are at least in common with two segments
        in_common_segments = []
        # For a given node test
        for node in self.nodes:
            segments_of_node = []
            

            


segments = [Segment('A','B'), Segment('A', 'C'), Segment('C', 'D')]
network = Network(segments)
# names = network.extract_nodes()
# for name in names:
#     print(name)
network.monitoring_nodes()